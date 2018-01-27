using System;
namespace algorithms.src
{
    public interface ISolution<T>
    {
        T Solve();

        void SetupTest();
    }
}
