import axios from "axios";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function ProductTable() {
  let [allProduct, setAllProduct] = useState([]);
  let sizeOptions = ["41", "42", "43", "44", "45"];
  // http://localhost:9999/product/getAll
  useEffect(() => {
    axios({
        method: "get",
        url: "http://localhost:9999/product/getAll",
      }).then((res)=>{
        console.log("dfdg",res.data)
        setAllProduct(res.data.data);
      }).catch((err)=>console.error(err))
    }, []);

  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
      headers: {
        Authorization: `bearer ${cookies.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
      
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <Table hover>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Image
      </th>
      <th>
        Title
      </th>
      <th>
        Price
      </th>
      <th>
        Size
      </th>
      <th>
        Color
      </th>
      <th>
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
      {allProduct.map((e,i)=>{
        return(
          <tr>
            <td>{i+1}</td>
            <td><img style={{height:"10px", width:"10px"}} src={e.thumbnail} alt="" /></td>
            <td>{e.title}</td>
            <td>{e.price}</td>
            <td>
            <div className="d-flex gap-2">
                    {sizeOptions.map((color, i) => {
                  // console.log(e.size);
                      return (
                        <div
                          className="pe-1 ps-1"
                          key={i}
                          style={
                            e.size.includes(color)
                              ? { color: "black", border: "1px solid black" }
                              : { color: "gray", border: "1px solid gray" }
                          }
                        >
                          {color}
                        </div>
                      );
                    })}
                  </div>
            </td>
            <td>
              <div className="d-flex gap-1">
                      {e?.color?.map?.((color) => {
                        return (
                          <div
                            style={{
                              width: "15px",
                              height: "15px",
                              border: "1px solid darkGray",
                              borderRadius: "50%",
                              background: color,
                            }}
                          ></div>
                        );
                      })}
                    </div>
            </td>
            <td>
              <Trash2 color="red" role="button"/>
            </td>
          </tr>
        )
      })}
  </tbody>
</Table>

    </div>
  );
}