const getstoredData = () => {
  const stringData = localStorage.getItem("read-item");
  if (stringData) {
    const strorData = JSON.parse(stringData);
    return strorData;
  } else {
    return [];
  }
};

const addData = (id) => {
  const getAddData = getstoredData();
  if (getAddData.includes(id)) {
    console.log("this item already exist", id);
  } else {
    getAddData.push(id);
    const storeSting = JSON.stringify(getAddData);
    localStorage.setItem("read-item", storeSting);
  }
};

const wishList = () => {
  const stringWishList = localStorage.getItem("find-item");
  if (stringWishList) {
    const storeWishList = JSON.parse(stringWishList);
    return storeWishList;
  } else {
    return [];
  }
};

const addWishList = (id) => {
  const getwishlistData = wishList();
  if (getwishlistData.includes(id)) {
    console.log("this is exit", id);
  } else {
    getwishlistData.push(id);
    const stringWishListL = JSON.stringify(getwishlistData);
    localStorage.setItem("find-item", stringWishListL);
  }
};

export { addData, addWishList, getstoredData, wishList };
