using System;
using System.Collections;
using System.Collections.Generic;
using algorithms.src;
using algorithms.src.Solutions;

namespace algorithms
{
    class Program
    {
        static void Main(string[] args)
        {
            var solution = new Solution<DoArrayMembersSumToNumber, Maybe<IEnumerable<int>>>();
            solution.RunTest();
        }
    }
}
