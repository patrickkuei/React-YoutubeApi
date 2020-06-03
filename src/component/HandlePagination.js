import { useState } from "react";

const HandlePagination = (videos) => {
  /* 用套件react-js-pagination做出頁碼、換頁等功能 */
  //react-js-pagination function
  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 12;
  const totalItemsCount = 50;
  const onChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  //declare 0, 12, 24, ... to each pages with Maximaum at total videos division videos per page
  //for counting which videos will show on each page
  const page = [];
  for (let j = 0; j < totalItemsCount / itemsCountPerPage; j++) {
    page[j] = itemsCountPerPage * j;
  }

  //counting which videos will show on each page
  //for example: show 0 to 12 on first page and 13 to 24 on second page and so on.
  //Todo: There is remainder in the lastest page
  const perPageVideos = [];
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
