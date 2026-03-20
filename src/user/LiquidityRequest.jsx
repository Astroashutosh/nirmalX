import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import { getLiquidityContract,getNRXContract } from "../utils/contract";

function LiquidityRequest() {

  const { contracts, address } = useSelector((state) => state.wallet);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const liquidityAddress =
    contracts?.LIQUIDITY_CONTRACT;

  useEffect(() => {
    if (liquidityAddress) {
      loadData();
    }
  }, [liquidityAddress]);

  /* ================= LOAD PENDING ================= */

  const loadData = async () => {
    try {

      const liquidity = await getLiquidityContract(liquidityAddress);

      const result = await liquidity.getAllPendingStakes();
      const stakes = result[0];   
      const users = result[1];    
        // console.log("stakes:",stakes);
        // console.log("users",users);

      const formatted = stakes.map((s, i) => ({
        id: s.id.toString(),
        amount: Number(ethers.formatUnits(s.amount, 18)),
        timestamp: s.timestamp,
        user: users[i],
        index: i  
      }));

//       const allStakes = await Promise.all(
//   stakes.map((_, i) => liquidity.allStakes(i))
// );

// const formatted = stakes.map((s, i) => ({
//   id: s.id.toString(),
//   amount: Number(ethers.formatUnits(s.amount, 18)),
//   timestamp: Number(s.timestamp),
//   user: allStakes[i].user,
//   index: Number(allStakes[i].index)   // ✅ correct index
// }));
        console.log("formatted data",formatted);

      setData(formatted);

    } catch (err) {
      console.log(err);
      toast.error("Failed to load data");
    }

    setLoading(false);
  };

  /* ================= APPROVE ================= */

  // const handleApprove = async (user, index) => {
  //   try {

  //     const liquidity = await getLiquidityContract(liquidityAddress);
  //         const nrx = await getNRXContract(contracts.TOKEN_CONTRACT);

  //     const confirmBox = window.confirm("Approve this stake?");
  //     if (!confirmBox) return;

  //     await (await nrx.approve(
  // contracts.LIQUIDITY_CONTRACT,
  // amount
  // )).wait();

  //     const tx = await liquidity.approveStake(user, index);
  //     await tx.wait();

  //     toast.success("Stake Approved");

  //     loadData();

  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Approve failed (Only owner allowed)");
  //   }
  // };


const handleApprove = async (user, index) => {
  try {

    const liquidity = await getLiquidityContract(contracts.LIQUIDITY_CONTRACT);
    const nrx = await getNRXContract(contracts.TOKEN_CONTRACT);

    const confirmBox = window.confirm("Approve this stake?");
    if (!confirmBox) return;

    await (await nrx.approve(
      contracts.LIQUIDITY_CONTRACT,
      ethers.MaxUint256
    )).wait();

    const tx = await liquidity.approveStake(user, index);
    await tx.wait();

    toast.success("Stake Approved");

    loadData();

  } catch (err) {
    console.log(err);
    toast.error("Approve failed (Only owner allowed)");
  }
};


  return (
    <>
      <div className="transaction-container">
        <h2>Liquidity Request</h2>

        <table
          className="table transaction-table"
          style={{ color: "#ffffff" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>DateTime</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-warning">
                  No Pending Stakes
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={i}>
                  <td>{row.id}</td>

                  <td>
                    $ {row.amount.toFixed(4)}
                  </td>

                  <td>
                    {new Date(Number(row.timestamp) * 1000).toLocaleString()}
                  </td>

                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleApprove(row.user, row.index)}
                    >
                      Approve {row.index}
                    </button>
                    
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LiquidityRequest;