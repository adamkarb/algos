using System;
namespace algorithms.src
{
    public abstract class BaseSolution : ISolution
    {
        public bool PrintResult { get; set; }

        public abstract T Solve<T>();
    }
}