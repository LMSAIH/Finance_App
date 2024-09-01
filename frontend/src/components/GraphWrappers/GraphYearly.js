const GraphsYearly = ({children, year}) => {
    return (  
        <div className = "month">
            <h2>Your planning for: {year} </h2>
            {children}
        </div>
    );
}
 
export default GraphsYearly;