import React, {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import GridItem from "../shared/GridItem";
import Loader from "../shared/Loader";
import { fetchContentPage, API_BASE_URL  } from "../../services/apiService";

const ContentGrid = ({data, setData }) => {
    const[page, setPage] = useState(1);
    const[hasMoreData, setHasMoreData] = useState(true);
    const {ref, inview} = useInView();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchContentPage(page);
                console.log("API Response:", response);
                setData((prev) => [...prev, ...response.page['content-items'].content]);
                setHasMoreData(response.page['content-items'].content.length > 0);
            } catch(error) { 
                console.error("Error fetching data", error);
            }
        };
        if(hasMoreData) {
            fetchData();
        }
    }, [page, setData, hasMoreData]);

    useEffect(() => {
        if(inview && hasMoreData) {
            setPage((prev) => prev + 1)
        }
    }, [inview, hasMoreData]);

    return(
        <div className="grid-container">
            {data?.map((item, index) => (
                <GridItem key={index} poster={`${API_BASE_URL}images/${item['poster-image']}`} title={item.name}/>
            ))}
            {hasMoreData && 
                (
                    <div ref={ref}> <Loader/></div>
                )
            }
        </div>
    )
}
export default ContentGrid;