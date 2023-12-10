const Hero = () => {
  const isLoggedIn = true;

  return (
    <section>
      <h2>Welcome to our website</h2>
      {isLoggedIn ? (
        <p>You are logged in. Enjoy your visit!</p>
      ) : (
        <p>Please log in to access special features.</p>
      )}
    </section>
  );
};

export default Hero;
