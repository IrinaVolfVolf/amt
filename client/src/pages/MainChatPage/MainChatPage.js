import React from "react";
import MainChatPageStyles from "./MainChatPage.module.css";
import {Routes, Route} from "react-router-dom";

const CompanionName = 'Sergey Sharov'

export const MainChatPage = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={
                    <>
                      <div className={MainChatPageStyles.chatbody}>
                          <div className={MainChatPageStyles.leftSideBar}>
                              <div className={MainChatPageStyles.leftSideBar_LogoMenu}>
                              </div>
                              <div className={MainChatPageStyles.leftSideBar_warning}>
                              </div>
                              <div className={MainChatPageStyles.leftSideBar_search_block}>
                                <div className={MainChatPageStyles.leftSideBar_search_input}>
                                </div>
                              </div>
                              <div className={MainChatPageStyles.leftSideBar_chats_field}>
                                <ul>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>
                                  <li className={MainChatPageStyles.leftSideBar_chats_field_li}></li>

                                </ul>
                              </div>
                          </div>
                          <div className={MainChatPageStyles.mainMessageScreen}>
                            <div className={MainChatPageStyles.mainMessageScreen_LogoMenu}>

                            <div className={MainChatPageStyles.LogoMenu_avatar}>
                            <img className={MainChatPageStyles.LogoMenu_avatar_img}></img>
                            </div>
                            <div className={MainChatPageStyles.LogoMenu_companion}>
                            <p>{CompanionName}</p>
                            </div>
                            <div className={MainChatPageStyles.LogoMenu_search}>
                                <span class="material-icons-outlined"></span>
                            </div>
                            <div className={MainChatPageStyles.LogoMenu_menu}>

                            <div className={MainChatPageStyles.burger_menu}>
                              <input id="menu-toggle" type="checkbox" />
                              <label className={MainChatPageStyles.menu_btn} htmlFor="menu-toggle">
                                <span />
                              </label>

                              <ul className={MainChatPageStyles.menubox}>
                                      <li><a className={MainChatPageStyles.menu_item} href="#">Home</a></li>
                                      <li><a className={MainChatPageStyles.menu_item} href="#">About us</a></li>
                                      <li><a className={MainChatPageStyles.menu_item} href="#">Blog</a></li>
                                      <li><a className={MainChatPageStyles.menu_item} href="#">Articles</a></li>
                                      <li><a className={MainChatPageStyles.menu_item} href="#">Contacts</a></li>
                              </ul>
                            </div>

                            </div>

                            </div>
                          </div>
                      </div>

                    </>
                    }/>
                </Routes>
        </>
    )
}
