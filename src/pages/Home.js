const style = {
  container: {
    minHeight: 'calc(100vh - 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeigth: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={style.container}>
      <h1 style={style.title}> Contacts manager welcome page </h1>
    </div>
  );
}
