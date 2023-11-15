import _ from "lodash";

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    // 3 -1 * 4 => 2* 4
    //2 - 1 * 4 => 1 * 4
    // 1-1 * 4 => 0

    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}