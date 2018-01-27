using System;
namespace algorithms.src
{
    public abstract class BaseSolution<T> : ISolution<T>
    {
        public bool PrintResult { get; set; }

        public abstract void SetupTest();

        public abstract T Solve();
    }
}