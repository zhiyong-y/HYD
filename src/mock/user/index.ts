import Mock from "mockjs";

const user = {
  getUserList: () =>
    Mock.mock({
      "tableData|7": [
        {
          "key|1-1000": 15,
          "name|1": [
            Mock.Random.cname(),
            Mock.mock("@cname"),
            Mock.mock("@cname()")
          ],
          "age|10-100": 16,
          "ip|+1": [Mock.Random.ip(), Mock.mock("@ip"), Mock.mock("@ip()")],
          "address|1": [
            Mock.mock(`@city(true)`),
            Mock.mock(`@city(true)`),
            Mock.mock(`@city(true)`)
          ],
          "date|1": [
            Mock.Random.date("yyyy-MM-dd"),
            Mock.Random.date("yyyy-MM-dd"),
            Mock.Random.date("yyyy-MM-dd")
          ]
        }
      ]
    })
};
export default user;
