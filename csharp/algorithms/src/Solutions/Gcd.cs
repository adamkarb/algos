using System;
using algorithms.src;
namespace algorithms.src.Solutions
{
    // Return the greatest common denominator of two numbers
    public class Gcd : BaseSolution<int>
    {
        private const int a = 32;

        private const int b = 72;

        public override void SetupTest()
        {

        }

        public override int Solve()
        {
            var gcd = 1;
            var divisor = 1;

            while (divisor <= a || divisor <= b)
            {
                if (a % divisor == 0 && b % divisor == 0)
                {
                    gcd = divisor;
                }

                divisor++;
            }

            return gcd;
        }
    }
}
