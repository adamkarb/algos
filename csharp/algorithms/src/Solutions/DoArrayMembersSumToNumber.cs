using System.Collections;
using System.Collections.Generic;

namespace algorithms.src.Solutions
{
    public class DoArrayMembersSumToNumber : BaseSolution<Maybe<IEnumerable<int>>>
    {
        private IEnumerable<int> list = new List<int> {5, 3, 15, 24, 53, 16};

        private int sumTarget = 27;

        public override void SetupTest()
        {
            
        }

        public override Maybe<IEnumerable<int>> Solve()
        {
            var cache = new Dictionary<int, bool>();

            foreach (var num in this.list)
            {
                var cacheCheckKey = this.sumTarget - num;

                if (cache.ContainsKey(cacheCheckKey))
                {
                    IEnumerable<int> solution = new List<int>
                    {
                        cacheCheckKey,
                        num
                    };

                    return solution.ToMaybe();
                }

                cache.Add(num, true);
            }

            return Maybe<IEnumerable<int>>.None();
        }
    }
}