using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace algorithms.src.Solutions
{
    public class NthFibonacci
    {
        public int Solve(int fibIndex)
        {
            var fib = new List<int> {0, 1};

            if (fibIndex < 0)
            {
                throw new ArgumentOutOfRangeException("Fibonacci index provided must be a positive integer");
            }

            if (fibIndex < 2)
            {
                return 1;
            }

            for (var i = 2; i <= fibIndex; i++)
            {
                fib[i] = fib[i - 1] + fib[i - 2];
            }

            return fib[fibIndex];
        }

        public int SolveRecursive(int fibIndex)
        {
            if (fibIndex == 0 || fibIndex == 1)
            {
                return 1;
            }

            return SolveRecursive(fibIndex) + SolveRecursive(fibIndex - 1);
        }

        public int SolveMemoized(int fibIndex)
        {
            var cache = new Dictionary<int, bool>();

            Func<int, int> fib = null;
            fib = n => n > 1 ? fib(n - 1) + fib(n - 2) : n;

            if (fibIndex == 0 || fibIndex == 1)
            {
                return 1;
            }


        }
    }

    public static class MemoExtensions
    {
        public static Func<A, B> Memoize<A, B>(this Func<A, B> fn)
        {
            var cache = new Dictionary<A, B>();
            return a =>
            {
                B value;

                if (cache.TryGetValue(a, out value))
                {
                    return value;
                }

                value = fn(a);
                cache.Add(a, value);
                return value;
            };
        }
    }
}

//public static Func<A, R> Memoize<A, R>(this Func<A, R> f)
//{
//var map = new Dictionary<A, R>();
//    return a =>
//{
//    R value;
//    if (map.TryGetValue(a, out value))
//        return value;
//    value = f(a);
//    map.Add(a, value);
//    return value;
//};
//}