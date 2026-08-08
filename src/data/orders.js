// /**
//  * @typedef {Object} Order
//  * @property {number} id
//  * @property {number} carId
//  * @property {number} managerId
//  * @property {string} description
//  * @property {string} date
//  * @property {string} status
//  * @property {string} email
//  */
/**
 * @typedef {Object} Order
 * @property {number} id
 * @property {number} carId
 * @property {string} description
 * @property {string} date
 * @property {string} status
 */

/** @type {Order[]} */
export const orders = [
  {
    id: 1,
    carId: 1,
    description: "Regular service and engine oil replacement",
    date: "2026-07-02",
    status: "Finished"
  },
  {
    id: 2,
    carId: 2,
    description: "Brake system inspection",
    date: "2026-07-04",
    status: "Diagnostics"
  },
  {
    id: 3,
    carId: 3,
    description: "Engine vibration during acceleration",
    date: "2026-07-07",
    status: "In Service"
  },
  {
    id: 4,
    carId: 4,
    description: "Transmission diagnostic",
    date: "2026-07-09",
    status: "Waiting for parts"
  },
  {
    id: 5,
    carId: 5,
    description: "Air conditioning service",
    date: "2026-07-11",
    status: "Finished"
  },
  {
    id: 6,
    carId: 6,
    description: "Suspension noise inspection",
    date: "2026-07-14",
    status: "Diagnostics"
  },
  {
    id: 7,
    carId: 7,
    description: "Annual vehicle inspection",
    date: "2026-07-16",
    status: "Finished"
  },
  {
    id: 8,
    carId: 8,
    description: "Brake pads replacement",
    date: "2026-07-19",
    status: "In Service"
  },
  {
    id: 9,
    carId: 9,
    description: "Timing belt inspection",
    date: "2026-07-21",
    status: "Waiting for parts"
  },
  {
    id: 10,
    carId: 10,
    description: "Electrical system diagnostic",
    date: "2026-07-23",
    status: "Diagnostics"
  },
  {
    id: 11,
    carId: 1,
    description: "Front suspension repair",
    date: "2026-07-25",
    status: "Finished"
  },
  {
    id: 12,
    carId: 3,
    description: "Cooling system inspection",
    date: "2026-07-28",
    status: "In Service"
  },
  {
    id: 13,
    carId: 6,
    description: "Engine oil leak inspection",
    date: "2026-07-30",
    status: "Waiting for parts"
  },
  {
    id: 14,
    carId: 12,
    description: "Battery and charging system inspection",
    date: "2026-08-02",
    status: "Finished"
  },
  {
    id: 15,
    carId: 18,
    description: "Full vehicle diagnostics",
    date: "2026-08-05",
    status: "Diagnostics"
  },
  {
    id: 16,
    carId: 12,
    description: "Oil change",
    date: "2026-06-02",
    status: "Finished"
  },
];