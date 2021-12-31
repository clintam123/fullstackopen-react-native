const formatDate = (dateString) => {
  const date = new Date(dateString);
  return [date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear()].join(
    "."
  );
};

export default formatDate;
