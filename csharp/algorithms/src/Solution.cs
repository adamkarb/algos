using System;
namespace algorithms.src
{
    public class Solution<T> where T : BaseSolution, new()
    {
        public void RunTest()
        {
            var solution = new T();
            var start = DateTime.Now.Millisecond;
            var result = solution.Solve();
            var end = DateTime.Now.Millisecond;
            var elapsedTime = end - start;
            Console.WriteLine($"Elapsed Time(ms): {elapsedTime}");
            if (solution.PrintResult == true)
            {
                Console.WriteLine($"Result: {result.ToString()}");
            }
        }
    }
}
