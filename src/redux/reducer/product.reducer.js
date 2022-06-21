import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_CATEGORIES,
  SET_SEARCH_KEY,
  SET_BRAND,
  SET_TYPE,
  SET_PAGINATION,
  SET_RATE,
  SET_SORT,
  SET_PRICE,
  SET_CLEAR_FILTER,
  SET_CATEGORY,
  GET_PRODUCT,
} from "../constant";

const initialState = {
  products: [],
  pagination: {
    _page: 1,
    _limit: 16,
    _totalProducts: 0,
  },
  category: {},
  rate: {},
  type: [],
  brand: [],
  price: {},
  search: {},
  order: {},
  isLoading: false,
  timeLoading: 0,
  isClearFilter: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...action.payload.products],
        pagination: {
          ...action.payload.pagination,
        },
        timeLoading: action.payload.timeLoading,
        isLoading: false,
      };
    case GET_PRODUCT_FAIL: {
      return { ...state, isLoading: false };
    }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],

        isClearFilter: true,
      };
    case SET_SORT: {
      const value = action.payload.params;
      return {
        ...state,
        pagination: {
          _page: 1,
          _limit: 16,
        },
        order: {
          _sort: value === "default" ? null : "price",
          _order: value === "default" ? null : value,
        },
        isClearFilter: true,
      };
    }
    case SET_SEARCH_KEY:
      return {
        ...state,
        pagination: {
          _page: 1,
          _limit: 16,
        },
        search: { name_like: action.payload },
        isClearFilter: true,
      };
    case SET_CATEGORY:
      return {
        ...state,
        pagination: {
          _page: 1,
          _limit: 16,
        },
        category: { categories_like: action.payload },
        isClearFilter: true,
      };
    case SET_BRAND: {
      return {
        ...state,
        brand: {
          brand_like: action.payload,
        },
      };
    }
    case SET_TYPE:
      return {
        ...state,
        type: {
          type_like: action.payload,
        },
      };
    case SET_PRICE: {
      return {
        ...state,
        pagination: {
          _page: 1,
          _limit: 16,
        },
        price: {
          price_gte: action.payload.gte,
          price_lte: action.payload.lte,
        },
        isClearFilter: true,
      };
    }
    case SET_PAGINATION: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          _page: action.payload,
        },
        isClearFilter: true,
      };
    }
    case SET_RATE: {
      return {
        ...state,
        rate: { rating_like: action.payload },
        isClearFilter: true,
      };
    }

    case SET_CLEAR_FILTER: {
      return {
        pagination: {
          _page: 1,
          _limit: 16,
          _totalProducts: 0,
        },
        isClearFilter: action.payload,
      };
    }

    default:
      return state;
  }
}
