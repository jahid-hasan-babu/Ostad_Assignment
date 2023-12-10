const Service = () => {
  const isPremiumUser = true;

  return (
    <div>
      <h2>Our Services</h2>
      {isPremiumUser ? (
        <p>Welcome, Premium User!</p>
      ) : (
        <p>Welcome, Standard User!</p>
      )}
    </div>
  );
};

export default Service;
