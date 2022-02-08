import { Reducer, AnyAction } from "redux";

interface LocationType {
  name: string;
  locationId: string;
  availableProduct: Array<any>;
};

type LocationState = {
  current: LocationType;
  available: Array<LocationType>;
};

const initialState: LocationState = {
  current: {
    name: "Home",
    locationId: "home",
    availableProduct: [],
  },
  available: [
    {
      name: "Candy Land",
      locationId: "candyLand",
      availableProduct: [],
    },
    {
      name: "Hershey Park",
      locationId: "hersheyPark",
      availableProduct: [],
    },
    {
      name: "Land of Oz",
      locationId: "landOfOz",
      availableProduct: [],
    },
    {
      name: "Willy Wonka's Factory",
      locationId: "wonkaFactory",
      availableProduct: [],
    },
    {
      name: "Knott's Berry Farm",
      locationId: "knottsFarm",
      availableProduct: [],
    },
  ],
};

const locationReducer: Reducer = (
  state = initialState,
  { type, payload }: AnyAction
): LocationState => {
  switch (type) {
    default:
      return state;
  }
};

export default locationReducer;