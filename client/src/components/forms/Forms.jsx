import React, { useState } from 'react'

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    services: [],
    serviceType: '',
  });

  const [showMultiSelectDropdown, setShowMultiSelectDropdown] = useState(false);
  const [selectedWebDevServices, setSelectedWebDevServices] = useState([]);
  const [selectedDigitalMarketingServices, setSelectedDigitalMarketingServices] = useState([]);

  const handleMultiSelectToggle = () => {
    setShowMultiSelectDropdown((prev) => !prev);
  };

  const handleMultiSelectOptionClick = (option) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(option)
        ? prev.services.filter((item) => item !== option)
        : [...prev.services, option],
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ...(e.target.name === 'serviceType' && { services: [] }),
    });
  };

  
  const getNextMonth = (service) => {
    const existingServices = selectedDigitalMarketingServices.filter((s) => s.service === service);
    return existingServices.length + 1;
  };

  const handleAddService = () => {
    if (formData.serviceType === 'Website Development') {
      setSelectedWebDevServices((prev) => [
        ...prev,
        ...formData.services.map((service) => ({
          service,
          quantity: '',
          price: '',
        })),
      ]);
    } else if (formData.serviceType === 'Digital Marketing') {
      setSelectedDigitalMarketingServices((prev) => [
        ...prev,
        ...formData.services.map((service) => ({
          service,
          month: getNextMonth(service),
          quantity: '',
          price: '',
        })),
      ]);
    }
    setFormData((prev) => ({ ...prev, services: [] }));
  };


  const handleRemoveService = (index, type) => {
    if (type === 'Website Development') {
      setSelectedWebDevServices((prev) => prev.filter((_, i) => i !== index));
    } else if (type === 'Digital Marketing') {
      setSelectedDigitalMarketingServices((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleServiceDetailChange = (index, field, value, type) => {
    if (type === 'Website Development') {
      setSelectedWebDevServices((prev) =>
        prev.map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      );
    } else if (type === 'Digital Marketing') {
      setSelectedDigitalMarketingServices((prev) =>
        prev.map((service, i) =>
          i === index ? { ...service, [field]: value } : service
        )
      );
    }
  };

  const getServiceOptions = () => {
    if (formData.serviceType === 'Website Development') {
      return [
        '1 Year domain',
        '3 Year hosting',
        'Business email Id',
        'SSL certificate for secure site',
        'Multiple pages',
        'Inquiry form pop up',
        '100 % Responsive',
        'Call Button integration',
        'WhatsApp Button integration',
        'Review section',
        'Social media integration',
        'Booking form',
        'Database connectivity',
        'Admin panel',
        'View contact date',
        'Add gallery images',
        'Online booking',
        'Support for three months',
        'Validity of a year',
      ];
    } else if (formData.serviceType === 'Digital Marketing') {
      return [
        'Social Media Marketing (SMM)',
        'Google My Business (GMB)',
        'Search Engine Optimization',
      ];
    } 
    
    return [];
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">Customer Form</h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Customer Form</li>
          </ol>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Contact Form</h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Project name</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Select subject"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">Start Date of Project</label>
                    <input
                      type="date"
                      name="startDate"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">End Date of Project</label>
                    <input
                      type="date"
                      name="endDate"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">Address</label>
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Select Service Type <span className="text-meta-1">*</span>
                    </label>
                    <select
                      name="serviceType"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Select service type</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Select Services <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onClick={handleMultiSelectToggle}
                      >
                        Select Services
                      </button>
                      {showMultiSelectDropdown && (
                        <div className="absolute z-10 mt-1 w-full rounded border-[1.5px] border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
                          {getServiceOptions().map((option) => (
                            <label key={option} className="flex items-center px-4 py-2">
                              <input
                                type="checkbox"
                                checked={formData.services.includes(option)}
                                onChange={() => handleMultiSelectOptionClick(option)}
                              />
                              <span className="ml-2 text-black dark:text-white">{option}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-4.5">
                  <button
                    type="button"
                    className="w-full rounded bg-primary py-3 px-5 text-white"
                    onClick={handleAddService}
                  >
                    Add Selected Services
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Selected Services</h3>
            </div>
            <div className="p-6.5">
              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white">Website Development Services</h4>
                {selectedWebDevServices.map((service, index) => (
                  <div key={index} className="mb-4 mt-4 flex flex-col gap-2 border-b pb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{service.service}</span>
                      <button
                        type="button"
                        className="text-red-500"
                        onClick={() => handleRemoveService(index, 'Website Development')}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <label className="block text-black dark:text-white">Quantity</label>
                        <input
                          type="number"
                          placeholder='Enter Quantity'
                          value={service.quantity}
                          onChange={(e) =>
                            handleServiceDetailChange(index, 'quantity', e.target.value, 'Website Development')
                          }
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-black dark:text-white">Price</label>
                        <input
                          type="number"
                          placeholder='Enter Price'
                          value={service.price}
                          onChange={(e) =>
                            handleServiceDetailChange(index, 'price', e.target.value, 'Website Development')
                          }
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">Digital Marketing Services</h4>
                {selectedDigitalMarketingServices.map((service, index) => (
                  <div key={index} className="mb-4 mt-4 flex flex-col gap-2 border-b pb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{service.service} - Month {service.month}</span>
                      <button
                        type="button"
                        className="text-red-500"
                        onClick={() => handleRemoveService(index, 'Digital Marketing')}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <label className="block text-black dark:text-white">Quantity</label>
                        <input
                          type="text"
                          value={service.quantity}
                          placeholder='Enter Quantity With Description'
                          onChange={(e) =>
                            handleServiceDetailChange(index, 'quantity', e.target.value, 'Digital Marketing')
                          }
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-black dark:text-white">Price</label>
                        <input
                          type="number"
                          placeholder='Enter Amount'
                          value={service.price}
                          onChange={(e) =>
                            handleServiceDetailChange(index, 'price', e.target.value, 'Digital Marketing')
                          }
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
