describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not let an empty serverName be passed from submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should append server information to #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let updatedServerList = document.querySelectorAll('#serverTable tbody tr td');

    expect(updatedServerList.length).toEqual(3);
    expect(updatedServerList[0].innerText).toEqual('Alice');
    expect(updatedServerList[1].innerText).toEqual('$0.00');
    expect(updatedServerList[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
