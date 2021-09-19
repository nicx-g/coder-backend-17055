class DB {
  init() {
    return "tuvieja";
  }

  async get(tableName: string, id?: number) {
    if (id) return "tu vieja";
    return "tu vieja";
  }
  async create(tableName: string, data: Object) {
    return "tu vieja";
  }
  async update(tableName: string, id: number, newData: any) {
    return "tu vieja";
  }
  async delete(tableName: string, id: number) {
    return "tu vieja";
  }
}

const db = new DB();
export default db;
