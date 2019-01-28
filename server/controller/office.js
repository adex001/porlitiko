import Office from '../dummymodel/office';

class OfficeController {
  static createGovernmentOffice(req, res) {
    const { type, name, description } = req.body;
    const requestData = { type, name, description };
    const data = Office.create(requestData);
    return res.json({
      status: 201,
      data,
    });
  }

  static getAllOffices(req, res) {
    const data = Office.retrieveAll();
    return res.json({
      status: 200,
      data,
    });
  }

  static getUniqueOffice(req, res) {
    const { officeId } = req.params;
    const data = Office.findOne(parseInt(officeId, 10));
    if (data) {
      return res.json({
        status: 200,
        data: [data],
      });
    }
    return res.json({
      status: 404,
      error: 'No such office',
    });
  }

  static deleteOffice(req, res) {
    const { officeId } = req.params;
    const data = Office.delete(parseInt(officeId, 10));
    if (data) {
      return res.json({
        status: 200,
        data,
      });
    }
    return res.json({
      status: 404,
      error: 'UserId does not exist',
    });
  }

  static modifyOffice(req, res) {
    const { officeId } = req.params;
    const { type, name, description } = req.body;
    const officeObject = { type, name, description };

    const data = Office.modify(parseInt(officeId, 10), officeObject);
    if (data) {
      return res.json({
        status: 200,
        data: [data],
      });
    }
    return res.json({
      status: 404,
      error: 'office not found',
    });
  }
}

export default OfficeController;
