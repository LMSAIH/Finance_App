import React, { useEffect, useState, version } from "react";
import el from "./Home.module.css";
import { getFinancesData } from "../../redux/HomeSelector";
import { useDispatch, useSelector } from "react-redux";
import { getFinancesTC, createNewFinanceTC } from "../../redux/finance-reducer";
import { deleteFinanceTC } from "../../redux/finance-reducer";
import { FinanceInfo } from "./FinanceInfo";
import { CreateNewFinanceForm } from "../../forms/CreateNewFinanceForm";
import { SelectIFilterForm } from "../../forms/SelectFilterForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { OverallFinanceInfo } from "./OverallFinanceInfo";
import { LineGraphContainer } from "./LineGraphContainer";
//Not finished components:
// import { AmountOutcomesEdditingForm } from './AmountOutcomesEdditingForm';
// import { OutcomesForm } from './OutcomesForm';

//Home function dnt
export const Home = () => {
  const [isEdditting1, setIsEdditing1] = useState(false);
  const [filter, setFilter] = useState({ month: "january", year: 2024 });
  const [finData, setFinData] = useState(null);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0); 
  const dispatch = useDispatch();

  let financesData = useSelector(getFinancesData);

  //user context for authorization request
  const { user } = useAuthContext();

  const token = user.token;

  //get finances from the redux
  const getFinances = (token) => {
    dispatch(getFinancesTC(token));
  };

  const createNewFinance = (year, month, income, outcomes, token) => {
    dispatch(createNewFinanceTC(year, month, income, outcomes, token));
  };

  //delete finance
  const deleteFinance = (id, token) => {
    dispatch(deleteFinanceTC(id, token));
  };

  //effect to get the financial info
  useEffect(() => {
    getFinances(token);
  }, [dispatch]);

  //effect to get all the financial information from the user
  useEffect(() => {
    let newFinanceData;
    let finalOutcome = 0;
    let finalIncome = 0;
    if (financesData.length > 0) {
      newFinanceData = financesData.filter((e) => {
        if (e.month === filter.month && e.year === filter.year) {
          let tempOutcome = 0;
          finalIncome += e.income;
          e.outcome.forEach((outcome) => {
            tempOutcome += outcome.amount;
          });
          finalOutcome += tempOutcome;
          return true;
        }
      });
    }
    setTotalIncome(finalIncome);
    setTotalOutcome(finalOutcome);
    setFinData(newFinanceData);
    if (newFinanceData) {
      if (newFinanceData.length == 0) {
        setFinData(null);
      }
    }
  }, [financesData, filter]);

  const createNewIncome = () => {
    setIsEdditing1(true);
  };

  const disableNewIncome = () => {
    setIsEdditing1(false);
  };

  return (
    <div className="homeContent">
      <div>
        <OverallFinanceInfo
          totalOutcome={totalOutcome}
          totalIncome={totalIncome}
        />
        <div className="createNew">
          <div>
            {isEdditting1 ? (
              <div>
                <CreateNewFinanceForm
                  createNewFinance={createNewFinance}
                  token={token}
                />
                <button onClick={disableNewIncome} className="closeCreateBtn">
                  Close
                </button>
              </div>
            ) : (
              <button className="openCreateBtn" onClick={createNewIncome}>
                Create finance object for a month and a year
              </button>
            )}
          </div>
        </div>
        <div className="filter">
          <SelectIFilterForm setFilter={setFilter} />
        </div>

        <h3 className="financeInfoHeader"> Your financial plans </h3>
        <div className="financialInfo">
          {finData ? (
            finData.map((e) => (
              <FinanceInfo
                financeData={e}
                deleteFinance={deleteFinance}
                token={token}
                key={e._id}
              />
            ))
          ) : (
            <div>It is empty down here, start planning your finances!</div>
          )}
        </div>
        <div className="lineGraphBox">
          <LineGraphContainer financesData={financesData} />
        </div>
      </div>
    </div>
  );
};
