import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Containers/Navbar";
import ContentGrid from "../features/ContentGrid";

const MainTemplate = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const handleSearch = useCallback(
        (query) => {
          if (query.trim() === "") {
            setFilterData(data);
          } else {
            setFilterData(
              data.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              )
            );
          }
        },
        [data] // Dependency: recalculate only when `data` changes
    );

    useEffect(() => {
        setFilterData(data);
    }, [data]);

    return (
        <div className="main-template">
            <Navbar onBack={() => console.log("Back clicked")} onSearch={handleSearch} />
            <ContentGrid data={filterData} setData={setData} />
        </div>
    );
};

export default MainTemplate;
