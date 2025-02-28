export const getMainPageProducts = async () => {
  try {
    const response = await fetch(
      process.env.API_URL + '/products/main-page/recommendations',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const getDetailPageProducts = async (productId: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/products/detail/${productId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      if (data.brand == null) {
        data.brand = 'NO BRAND';
        return data;
      } else return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const subscribePlan = async (access: any, plan: string) => {
  const data = {
    subscribeType: plan,
  };
  const response = await fetch(process.env.API_URL + '/subscribe/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export const refreshAccessToken = async (refresh: any) => {
  const data = {
    refresh: refresh,
  };
  const response = await fetch(process.env.API_URL + '/oauth/kakao?code=', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const kakaoLogin = async (code: any) => {
  const response = await fetch(
    process.env.API_URL +
      `/oauth/kakao?code=${code}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}/login/kakaoLogin`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const pickupWardrobe = async (access: any, datas: any) => {
  const data = datas;

  const response = await fetch(process.env.API_URL + '/sell', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(process.env.API_URL + '/products/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const putMypick = async (access: any, productId: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/cart/my-pick/${productId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    return { success: true };
  }
};

export const inquiryMypick = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + `/cart/my-pick`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });
    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.product.brand == null) {
          item.product.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const applyHomeFitting = async (access: any, ids: any[]) => {
  const data = {
    cartProductIds: ids,
  };
  try {
    const response = await fetch(process.env.API_URL + '/home-fitting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const checkSubscribe = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + '/subscribe/check', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const getUserInfo = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + '/sign/userInfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const getIsSubscribe = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + '/subscribe/check', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });
    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async (access: any, datas: any) => {
  const data = {
    email: datas.email,
    name: datas.name,
    nickname: datas.nickname,

    phoneNumber: datas.phoneNumber,
    address: datas.address,
    bank: datas.bank,
  };

  const response = await fetch(process.env.API_URL + '/sign/update', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export const getCategory = async () => {
  try {
    const response = await fetch(process.env.API_URL + '/products/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const getItemLatest = async (
  cursorId: number = 0,
  categoryId: number = 0,
  pageSize: number = 16
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    categoryId: categoryId !== 0 ? categoryId.toString() : '',
    pageSize: pageSize.toString(),
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${process.env.API_URL}/products/latest?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const getItemLowest = async (
  cursorId: number = 0,
  cursorPrice: number = 0,
  categoryId: number = 0,
  pageSize: number = 16
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    cursorPrice: cursorPrice !== 0 ? cursorPrice.toString() : '',
    categoryId: categoryId !== 0 ? categoryId.toString() : '',
    pageSize: pageSize.toString(),
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${process.env.API_URL}/products/price-lowest?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const getItemHighest = async (
  cursorId: number = 0,
  cursorPrice: number = 0,
  categoryId: number = 0,
  pageSize: number = 16
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    cursorPrice: cursorPrice !== 0 ? cursorPrice.toString() : '',
    categoryId: categoryId !== 0 ? categoryId.toString() : '',
    pageSize: pageSize.toString(),
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${process.env.API_URL}/products/price-highest?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const getItemSeen = async (
  cursorId: number = 0,
  categoryId: number = 0,
  pageSize: number = 16
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    categoryId: categoryId !== 0 ? categoryId.toString() : '',
    pageSize: pageSize.toString(),
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${process.env.API_URL}/products/seen?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const inquiryHomeFitting = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + '/home-fitting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.product.brand == null) {
          item.product.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const searchItem = async (
  cursorId: number = 0,
  pageSize: number = 16,
  keyword: string
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    pageSize: pageSize.toString(),
    keyword: keyword,
  };

  const queryString = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `${process.env.API_URL}/products/keyword?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const searchItemByPrice = async (
  cursorId: number = 0,
  cursorPrice: number = 0,
  pageSize: number = 16,
  keyword: string,
  sortType: string
): Promise<any> => {
  const params = {
    cursorId: cursorId !== 0 ? cursorId.toString() : '',
    cursorPrice: cursorPrice !== 0 ? cursorPrice.toString() : '',
    pageSize: pageSize.toString(),
    keyword: keyword,
    sortType: sortType,
  };

  const queryString = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `${process.env.API_URL}/products/keyword/by-price?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};

export const inquirySubscribe = async (access: any, state: string) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/subscribe/history/${state}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
export const inquirySubscribeLatest = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/subscribe/history/all',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const orderProducts = async (access: any, datas: any) => {
  const data = {
    address: datas.address,
    personName: datas.name,
    phoneNumber: datas.phoneNumber,
    productIds: datas.productIds,
    requestDetail: datas.requestDetail,
  };

  const response = await fetch(process.env.API_URL + '/order/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
};

export const deleteProducts = async (access: any, cartProductId: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + `/cart/my-pick/${cartProductId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    return { success: true };
  }
};

export const showWardrobeAll = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/sell/history/published',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const showWardrobePreparing = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/sell/history/preparing',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const showWardrobeSelling = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/sell/history/selling',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const showWardrobeSold = async (access: any) => {
  try {
    const response = await fetch(process.env.API_URL + '/sell/history/sold', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const showWardrobeSettled = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/sell/history/settled',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      const clothes = data.map((item: any) => {
        if (item.brand == null) {
          item.brand = 'NO BRAND';
          return item;
        } else return item;
      });
      return clothes;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    throw error;
  }
};
export const showWardrobeSettlement = async (access: any, ids: any[]) => {
  const data = {
    productIds: ids,
  };
  try {
    const response = await fetch(process.env.API_URL + '/sell/settlement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
export const setProductPrice = async (
  access: any,
  id: number,
  newPrice: number
) => {
  const data = {
    productId: id,
    price: newPrice,
  };

  try {
    const response = await fetch(
      process.env.API_URL +
        `/products/submit-price?productId=${id}&price=${newPrice}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
        // body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw error;
  }
};
