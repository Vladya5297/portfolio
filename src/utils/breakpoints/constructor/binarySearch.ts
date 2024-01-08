/**
 * Binary search, that returns index of where the target number should be placed in the given array.
 * If array contains exact same value as target, it's assumed that the target
 * will be placed after it.
 */
export const binarySearch = (arr: number[], target: number): number => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const currentIndex = Math.trunc((leftIndex + rightIndex) / 2);
        const current = arr[currentIndex];

        if (target === current) {
            return currentIndex + 1;
        }

        if (target > current) {
            leftIndex = currentIndex + 1;
        }

        if (target < current) {
            rightIndex = currentIndex - 1;
        }
    }

    return leftIndex;
};
