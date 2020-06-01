import { useState } from "react";

const HandlePagination = (videos) => {
  /* 用套件react-js-pagination做出頁碼、換頁等功能 */
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 12;
  const totalItemsCount = 50;
  const onChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  let page = [];
  for (let j = 0; j < totalItemsCount / itemsCountPerPage; j++) {
    page[j] = itemsCountPerPage * j;
  }
  let perPageVideos = [];
  for (let i = page[activePage - 1]; i < itemsCountPerPage * activePage; i++) {
    perPageVideos[i] = videos[i];
  }
  return {
    perPageVideos,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
    onChange,
  };
};

export default HandlePagination;
