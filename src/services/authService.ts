import api from "../api/axiosInstance.ts";

export const healthCheckService = () => api.get(`/health`);

export const dummyService = () => api.get(`/todos/1`);
//export const dummyService = () => api.get(`/users`);
//https://jsonplaceholder.typicode.com/todos/1

export const getBoardingPassService = (booking_id: string) =>
  api.get(`/api/v1/boarding-pass/${booking_id}`);

export const printBoardingPassService = (booking_id: string) =>
  api.get(`/api/v1/print-boarding-pass/${booking_id}`);

export const checkFlightOffersService = () => api.get(`/api/v1/flight-offers/`);

export const checkFlightPricesService = (flight_number: number) =>
  api.get(`/api/v1/flight-prices/${flight_number}`);

export const checkFlightReservationService = (booking_id: string) =>
  api.get(`/api/v1/flight-reservation/${booking_id}`);

export const checkFlightStatusService = (flight_number: number) =>
  api.get(`/api/v1/flight-status/${flight_number}`);

export const searchFlightService = (
  departure: string,
  destination: string,
  date: string
) => api.get(`/api/v1/search-flight/${departure}/${destination}/${date}`);

export const checkArrivalTimeService = (flight_number: number) =>
  api.get(`/api/v1/arrival-time/${flight_number}`);

export const checkDepartureTimeService = (flight_number: number) =>
  api.get(`/api/v1/departure-time/${flight_number}`);

export const checkTripPricesService = (trip_id: string) =>
  api.get(`/api/v1/trip-prices/${trip_id}`);

export const checkTripDetailsService = (trip_id: string) =>
  api.get(`/api/v1/trip-details/${trip_id}`);

export const checkTripOffersService = () => api.get(`/api/v1/trip-offers/`);

export const checkTripPlanService = (trip_id: string) =>
  api.get(`/api/v1/trip-plan/${trip_id}`);

export const searchTripService = (
  departure: string,
  destination: string,
  date: string
) => api.get(`/api/v1/search-trip/${departure}/${destination}/${date}`);

export const checkInService = (booking_id: string, body: object) =>
  api.post(`/api/v1/check-in/${booking_id}`, body);

export const chooseSeatService = (booking_id: string, body: object) =>
  api.post(`/api/v1/choose-seat/${booking_id}`, body);

export const changeSeatService = (booking_id: string, body: object) =>
  api.post(`/api/v1/change-seat/${booking_id}`, body);

export const bookFlightService = (body: object) =>
  api.post(`/api/v1/book-flight/`, body);

export const cancelFlightService = (booking_id: string, body: object) =>
  api.post(`/api/v1/cancel-flight/${booking_id}`, body);

export const changeFlightService = (booking_id: string, body: object) =>
  api.post(`/api/v1/change-flight/${booking_id}`, body);

export const purchaseFlightInsuranceService = (
  booking_id: string,
  body: object
) => api.post(`/api/v1/purchase-flight-insurance/${booking_id}`, body);

export const getRefundService = (booking_id: string, body: object) =>
  api.post(`/api/v1/get-refund/${booking_id}`, body);

export const bookTripService = (body: object) =>
  api.post(`/api/v1/book-trip/`, body);

export const cancelTripService = (trip_id: string, body: object) =>
  api.post(`/api/v1/cancel-trip/${trip_id}`, body);

export const changeTripService = (trip_id: string, body: object) =>
  api.post(`/api/v1/change-trip/${trip_id}`, body);

export const purchaseTripInsuranceService = (trip_id: string, body: object) =>
  api.post(`/api/v1/purchase-trip-insurance/${trip_id}`, body);
