const api = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              name: "sunkid",
              age: 25,
              city: 'Hà nội'
            },
          ],
        }),
      1000
    );
  });
};

export default api;
