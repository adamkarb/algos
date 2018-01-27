using System;
using System.Runtime.CompilerServices;

namespace algorithms.src
{
    public class Maybe<T>
    {
        private readonly T value;

        public Maybe(T maybeValue)
        {
            if (maybeValue == null)
            {
                throw new ArgumentNullException(nameof(maybeValue));
            }

            this.value = maybeValue;
        }

        private Maybe()
        {

        }

        public Maybe<TO> Bind<TO>(Func<T, Maybe<TO>> func)
        {
            return this.value != null ? func(this.value) : Maybe<TO>.None();
        }

        public static Maybe<T> None() => new Maybe<T>();
    }

    public static class MaybeExtensions
    {
        public static Maybe<T> ToMaybe<T>(this T obj)
        {
            return new Maybe<T>(obj);
        }
    }
}