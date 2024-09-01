const GraphsMonthly = ({children, month}) => {
    return (  
        <div className = "month">
            <h3>Your planning for: {month} </h3>
            {children}
        </div>
    );
}
 
export default GraphsMonthly;