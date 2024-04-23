// Array filter
const filterArray = <T, U = string>(array: T[], condition: U): T[] => {
  return array.filter((item: T) => typeof item === typeof condition)
}

// Stack
class Stack<T> {
  public items: T[] = []

  getFirstItem(): T | undefined {
    return this.items[0]
  }

  addItem(itemToAdd: T): void {
    this.items.push(itemToAdd)
  }

  removeLastItem(): void {
    this.items.pop()
  }
}

// Dictionary
type DictionaryItems<T> = {
  [key: string]: T,
  [key: number]: T,
  [key: symbol]: T
}

class Dictionary<T> {
  private _items: DictionaryItems<T> = {}
  
  get items(): DictionaryItems<T> {
    return this._items
  }

  set items(updatedItems: DictionaryItems<T>) {
    this._items = {...this._items, ...updatedItems}
  }

  hasItem(itemToCheck: string | number | symbol): boolean {
    return itemToCheck in this._items
  }
}
