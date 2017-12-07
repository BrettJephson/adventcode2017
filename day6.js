const input = "5\t1\t10\t0\t1\t7\t13\t14\t3\t12\t8\t10\t7\t12\t0\t6"

const bothParts = () => {
    function test(banks) {
        let results = []
        let matchedState = false
        while(!matchedState) {
            let max = { index: banks.length, value: 0 }

            banks.forEach((bank, i) => {
                if (bank > max.value) {
                    max.value = bank
                    max.index = i
                }
            })

            banks[max.index] = 0

            let blocks = max.value
            let pointer = max.index  + 1

            while(blocks > 0) {
                if (pointer >= banks.length) { pointer = 0 }

                banks[pointer] += 1
                --blocks
                pointer += 1
            }
            let result = banks.join()

            let index = results.indexOf(result)
            let isMatchedState = index > -1
            matchedState = isMatchedState
            results.push(result)

            if (isMatchedState) {
                return {
                    count: (results.length - 1) - index, // part2
                    len: results.length // part1
                }
            }
        }

        return results.length
    }

    console.log(test([0, 2, 7, 0]))
    console.log(test(input.split('\t').map(value => parseInt(value, 10))))
}

bothParts()