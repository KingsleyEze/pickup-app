const statuses = {
  waiting: "WAITING",
  assigned: "ASSIGNED",
  picked_up: "PICKED_UP",
  delivered: "DELIVERED"
};

const orders = [
  {
    id: 0,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: { id: 1, name: "Biker1" },
    status: statuses.waiting
  },
  {
    id: 1,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 2,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 3,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 4,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 5,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 6,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 7,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 8,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 9,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 10,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 11,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 12,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 13,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 14,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 15,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 16,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 17,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 18,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 19,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 20,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 21,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 22,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 23,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 24,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 25,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 26,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 27,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 28,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 29,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 30,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 31,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 32,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 33,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 34,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 35,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 36,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 37,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 38,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 39,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 40,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 41,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 42,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 43,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 44,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 45,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 46,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 47,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 48,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  },
  {
    id: 49,
    origin: "Sender Origin",
    destination: "Receiver Origin",
    assignee: null,
    status: statuses.waiting
  }
];

module.exports = orders;
