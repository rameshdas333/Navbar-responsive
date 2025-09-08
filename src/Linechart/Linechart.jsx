import { RadialBarChart,Legend,Tooltip,RadialBar} from 'recharts';


const Linechart = () => {

   const lineChartResults  = 
   
   [
    {
        "id": 1,
        "name": "John Doe",
        "math_result": 35,
        "physics_result": 90,
        "chemistry_result": 78
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "math_result": 72,
        "physics_result": 87,
        "chemistry_result": 91,
        "fill": "#83a6ed"
    },
    {
        "id": 3,
        "name": "Sam Johnson",
        "math_result": 75,
        "physics_result": 80,
        "chemistry_result": 68,
        "fill": "#8dd1e1"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "math_result": 88,
        "physics_result": 55,
        "chemistry_result": 85,
         "fill": "#82ca9d"
    },
    {
        "id": 5,
        "name": "Michael Brown",
        "math_result": 79,
        "physics_result": 82,
        "chemistry_result": 76,
         "fill": "#a4de6c"
    },
    {
        "id": 6,
        "name": "Jessica Wilson",
        "math_result": 91,
        "physics_result": 79,
        "chemistry_result": 94,
        "fill": "#d0ed57"

    },
    {
        "id": 7,
        "name": "Daniel Martinez",
        "math_result": 84,
        "physics_result": 85,
        "chemistry_result": 79,
        "fill": "#d0ed57"
    },
    {
        "id": 8,
        "name": "Sarah Lee",
        "math_result": 93,
        "physics_result": 92,
        "chemistry_result": 90,
         "fill": "#83a6ed"
    },
    {
        "id": 9,
        "name": "David Taylor",
        "math_result": 67,
        "physics_result": 79,
        "chemistry_result": 73,
         "fill": "#8884d8"
    },
    {
        "id": 10,
        "name": "Sophia Clark",
        "math_result": 89,
        "physics_result": 91,
        "chemistry_result": 88,
         "fill": "#ffc658"
    }
]

    return (
        <div>
            {/* <LineChart width={400} height={500} data={lineChartResults}> */}
            <RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="120%" 
  data={lineChartResults} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#8884d8', position: 'insideStart' }} background clockWise={true} dataKey='math_result' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>


        </div>
    );
};

export default Linechart;