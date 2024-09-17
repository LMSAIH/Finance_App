import { useEffect, useState } from "react"
import LineGraph from "../Graphs/LineGraph";

export const LineGraphContainer = (props) => {

    const [year, setYear] = useState(2024);

    const [filteredData, setFilteredData] = useState(null);








    useEffect(() => {

        // const filterByMonth = (data) => {

        //     const labels = [
        //         "January",
        //         "February",
        //         "March",
        //         "April",
        //         "May",
        //         "June",
        //         "July",
        //         "August",
        //         "September",
        //         "October",
        //         "November",
        //         "December",
        //     ];

        //     for (let i = 0; i < data.length; i++) {
        //         for (let j = 0; j < labels.length; j++) {
        //             console.log(data);
        //             console.log("^^^^^");
        //             if (data[i].month == labels[j]) {
        //                 let savedData;
        //                 savedData = data[j];
        //                 data[j] = data[i];
        //                 data[i] = savedData;
        //             }
        //         }
        //     }
        // };


        function sortByMonth(arr) {
            const monthOrder = {
              "January": 1,
              "February": 2,
              "March": 3,
              "April": 4,
              "May": 5,
              "June": 6,
              "July": 7,
              "August": 8,
              "September": 9,
              "October": 10,
              "November": 11,
              "December": 12
            };

            
            return arr.sort((a, b) => monthOrder[a.month] - monthOrder[b.month]);
          }

        function createUniqueSet(arr) {
            const uniqueSet = new Set();
            const uniqueArray = [];

            arr.forEach(item => {
                const uniqueKey = `${item.year}-${item.month}`;

                if (!uniqueSet.has(uniqueKey)) {
                    uniqueSet.add(uniqueKey);
                    uniqueArray.push(item); // Add only if not a duplicate
                }
            });
            
            return uniqueArray;
        }

        const uniqueData = createUniqueSet(props.financesData);

        let dataWithYear = uniqueData.filter(data => data.year == year);

        const dataFilteredByMonth = sortByMonth(dataWithYear);

        setFilteredData(dataFilteredByMonth.map(el => {
            let totalOutcome = 0;
            for (let i = 0; i < el.outcome.length; i++) {
                totalOutcome += el.outcome[i].amount;
            }
            return { income: el.income, month: el.month, outcome: totalOutcome }
        }))


        console.log("WATCH HERE!!");
        console.log(filteredData);
    }, [year, props.financesData]);

    return (
        <div className = 'lineGraphContainer'>

            <h2>Your savings <span className = "visualized"> visualized. </span></h2>
            <input type="number" className = "yearSelector" defaultValue={2024} onChange={(e) => { setYear(e.currentTarget.value) }}/>            
            {console.log("FILTERED DATA")}
            {console.log(filteredData)}
            {filteredData && <LineGraph incomes={filteredData.map(data => data.income)} outcomes={filteredData.map(data => data.outcome)} months={filteredData.map(data => data.month)} />}
        </div>
    )
}