import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "/src/features/counter/counterSlice";
import Container from "../Container";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    } else {
      return;
    }
  };

  return (
    <>
      <Container>
        <div className="">
          <div className="flex justify-between">
            <button
              aria-label="Decrement value"
              // onClick={() => dispatch(decrement())}
              onClick={handleDecrement}
            >
              <FiMinus />
            </button>

            <span>{count}</span>
            <button
              className=""
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Counter;
