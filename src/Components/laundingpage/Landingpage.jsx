import React, { useEffect, useState } from "react";
import "./landingpg.css";
import { Input, Button } from "antd";
import { HeartOutlined, HeartFilled, HeartTwoTone } from "@ant-design/icons";


function Landingpage() {
  const { Search } = Input;
  const [searchKey, setSearchKey] = useState("boxer");
  const [iconColor, setIconColor] = useState("");
  const [favorite, setFavorite] = useState([]);
  const onSearch = (value: string) => {
    setSearchKey(value.toLowerCase());
    rickyApi()
  };

  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const rickyApi = () => {
    fetch(` https://dog.ceo/api/breed/${searchKey}/images/random/18`).then(
      (res) =>
        res.json().then((res) => {
          if (res.message && res.message.length) {
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
      <h2>Breed</h2>
      <div>
        <Search
          style={{ width: "380px", paddingTop: "20px" }}
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
                <img className="img " src={item} alt="" />
                <Button
                  style={{
                    position: "absolute",
                    left: "125px",
                    bottom: "1px",
                    height: "30px",
                    width: "31px",
                  }}
                  icon={<HeartOutlined style={{ color: iconColor }} />}
                  onClick={() => {
                    setIconColor("red");
                    setFavorite([...favorite, item]);
                   
                  }}
                >
                 
                </Button>
              </div>

             
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Favorite</h2>
        <div className="Landingpage-f">
          {favorite?.map((item) => (
            <div className="grid">
              <div className="">
                <div className="card-image">
                  <img className="img " src={item} alt="" />
                  <Button
                    style={{
                      position: "absolute",
                      left: "125px",
                      bottom: "1px",
                      height: "30px",
                      width: "31px",
                    }}
                    icon={<HeartOutlined style={{ color: iconColor }} />}
                    onClick={() => {
                      setIconColor("red");
                      setFavorite([...favorite, item]);
                      
                    }}
                  >
                   
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
