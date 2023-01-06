import React, { useEffect, useState } from "react";
import "./landingpg.css";
import { Input } from "antd";

function Landingpage() {
  const { Search } = Input;
  const [searchKey, setSearchKey] = useState("boxer");
  const onSearch = (value: string) => {
    setSearchKey(value.toLowerCase());
  };

  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const rickyApi = () => {
    fetch(` https://dog.ceo/api/breed/${searchKey}/images/random/10`).then(
      (res) =>
        res.json().then((res) => {
            if(res.message && res.message.length) {
                setItems(res.message);
                setLoaded(true);
            }
        })
    );
  };
  useEffect(() => {
    rickyApi();
  }, []);

  return !loaded ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>
        <Search
          className="!w-[400px]"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>

      <div className="Landingpage-f">
        {items?.map((item) => (
          <div className="grid">
            <div className="">
              <div className="card-image">
                <img  className="img " src={item} alt="" />
              </div>
              {/* 
                        <div className='card-Data'>
                            <div className="card-name">
                                {item.name}
                            </div>
                            <div className="card-deatail-staus">
                                <div 
                                style={{ backgroundColor: item.status === "Alive" ? 'green': item.status ==="Dead" ? 'red' : 'grey'}}
                                className="card-detail-statusIndicator">

                                </div>
                                <div>
                                {item.status}-{item.species}
                                </div>

                            </div>
                            <br>
                            </br>
                            

                            <div>
                               <div className="cardDetail-title"> Last known location:</div>
                               <div> {item.location.name}</div>
                            </div>
                            <br>
                            </br>
                            <div>
                                <div className="cardDetail-title">First seen in:</div>
                                <div>{item.origin.name}</div>
                            </div>
                        </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landingpage;
