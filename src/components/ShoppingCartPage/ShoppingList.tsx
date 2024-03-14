export default function ShoppingList() {
  const myState = JSON.parse(localStorage.getItem("myState") || "{}");
  return (
    <>
      {myState.length < 1 ? (
        <p>The Cart is empty</p>
      ) : (
        <p>{JSON.stringify(myState)}</p>
      )}
    </>
  );
}
