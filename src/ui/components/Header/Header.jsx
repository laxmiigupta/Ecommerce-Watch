import React from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { Heart, Search, ShoppingBag, UserRound } from 'lucide-react';
import logo from "../../../assets/logo.gif"
import { useCookies } from "react-cookie";

export default function Header() {
    const navigate = useNavigate();
    let [cookie, setCookie] = useCookies(["user", "token"]);
    return (
        <>
          {cookie?.user?.userType !== "admin" ? (
            //Frontend
            <div className='page-header'>
                <div className="header wrapper">
                    <div className='header-container'>
                        <div className="logo">
                            <a href="/"> <img src={logo} alt="" /> </a>
                        </div>
                        <div className='nav-section'>
                            <ul>
                                <li>
                                    <NavLink to={'/watches'}>Watches</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/brands'}>Brands</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/mens-watches'}>Men</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/womens-watches'}>Women</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/smartwatches'}>Smart</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/offers'}>Offer</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/store'}>Store</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="other-section">
                            <div className="searchbar">
                                <div className="searchBar">
                                    <input id="searchQueryInput" type="text" className="searchQueryInput" placeholder="Search entire store here..." value="" />
                                    <button id="searchQuerySubmit" type="submit" className="searchQuerySubmit">
                                        <Search />
                                    </button>
                                </div>
                            </div>
                            <div className="useraccount">
                                <UserRound role='button' onClick={()=> navigate("/login")}/>   
                            </div>
                            <div className="wishlist">

                                <Heart />
                            </div>
                            <div className="mincart">
                                <ShoppingBag />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            ) : (
                //Dashbord
                <>
                  <NavLink to={"/admin-dashbord"}>Dashboard</NavLink>
                  <NavLink to={"/admin-user"}>User</NavLink>
                  <NavLink to={"/admin-order"}>Order</NavLink>
                  <NavLink to={"/admin-product"}>Product</NavLink>
                </>
              )}
        </>
    )
}
