const buyOptions = {
  durationOptions: [1, 2, 3, 4, 5, 6],
  ticketOptions: [
    {
      id: 0,
      title: "Standard",
      description: `You will be able to:
        <ul>
            <li>Play with all the fluffy friends.</li>
            <li>Order treats for yourself and the furry tails.</li>
        </ul>`,
      price: 1000
    },
    {
      id: 1,
      title: "VIP",
      description: `VIP tickets provide all the benefits of the standard tickets, plus:
        <ul>
            <li>A guided tour with stories about the cafe’s residents.</li>
            <li>Free treats for the cats.</li>
        </ul>`,
      price: 1500
    }
  ]
};


export default buyOptions;
