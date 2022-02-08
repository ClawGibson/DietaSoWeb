import { deposit, withdraw } from "../../../redux/actions/counter";
import { connect } from "react-redux";

const Counter = ({deposit,withdraw}) => {
    return (
        <div align="center">
            <h1>Amount ...</h1>
            <button onClick={() => deposit()}>Deposit $10</button>
            <button onClick={() => withdraw()}>Withdraw $10</button>
        </div>
    );
};

//export default Counter;
export default connect(null,{deposit,withdraw})(Counter)