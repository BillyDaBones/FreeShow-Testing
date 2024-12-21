export function chronicleShow(timestamp: number) {
    const usedDate: number = new Date(timestamp).getTime();
    const chronicleRef: number = new Date('2024-01-01').getTime();

    const daysDifference = Math.floor((usedDate - chronicleRef) / (1000 * 60 * 60 * 24));

    //output example "044" (44th day from chronicleRef)
    return daysDifference.toString().padStart(3, '0');
}
