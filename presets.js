exports.getPresets = function () {

	var image_local = "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjRUMDA6NDA6MjgrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjRUMDA6NDA6MjgrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTI0VDAwOjQwOjI4KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1ZTUxYzE5LWU2NmYtNGExMy1iOWFlLWE1NzY4NjRlMTQ1NCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZjN2JiMjNkLTQ4OTQtZTI0Yi04ZGVlLThmZjU3OWRlM2QxMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgxNjIwZTBhLWY5NjktNDViNC04YmVlLWMzMzU4NjQ2OTc3ZiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNjIwZTBhLWY5NjktNDViNC04YmVlLWMzMzU4NjQ2OTc3ZiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MDoyOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1ZTUxYzE5LWU2NmYtNGExMy1iOWFlLWE1NzY4NjRlMTQ1NCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MDoyOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NmUxMzUxMS0wOWU5LTYwNDUtYmQxOC02Y2JhZTg2YjNkNGE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4s1YmlAAADDElEQVR4nO3azYsURxyH8c/M7qooAY0SMCsogje9CQnC+kIMJKCCSA5evKkIKnoXwaMgSCCo6MGDIAmI3uLLJcp68JAccouSP8C3SOJbFNcZD9WrY0+vtTup3slKPTCXpvrbVc90V/9qahrtdltmYgZTho2MjPR66jxswH48wzH8ipe9hI2Ojvbajy6SCuqBIazFbnzXcXwTzuKMIKpvt3mzXxfGekHAZe/LIXxxO3EV32P1tPas1JHp5gvswhYsirRdgH1F24s4hTu19q7EdApaIcwx27B4iucuxUFsxTn8gPtJezcB0/GIDeMIrmOvqcvpZBkO4SYOYOF/61qcOgUNC4O4icP4PFFuQ7gbj+MXYa76LFF2F3UIWoI9uCIMYlkN1xhnFU7jErbj09QXSC1oKy7gBFYmzv4Qa3AeP6LnYqyK1IJ2CG+pfvE1vk0ZmFrQWOK8XnidMiz1a/61sDzoV+Xb8D8XdBLX9O9OGsRvqQNTcqP4fDT0cy02I6hzqTGMjZgjzAuDeI6f8bCj3QC+Eoq/l8I8Mkt4VG6VMpcXbZtF5hAeCTXXP3UMok5Bq3BUWHASBv4Ef3hf0CxhCfKNd5N7Q1iYlgV9KazDdLT7E7+bgYJgtiBgnKbuN1yr6MdQxfEyrVKe4ryqtkmocw5q6+54S3UJUDXAqnaTPTcZeZKOkAVFyIIiZEERsqAIWVCELChCnYKaFfkDFccaxfEyVceq+tssMmqhzkr6Be4Ka6YxoeJ9oHs7uY2/8FTYdm5gLv6uyHyOe4KUllCpP8Cr5L0vaKT880Jpb35QGGjnt9sWJJR/1JonLCHGq+KGIPLfUruhIrOTVpH5tqKeKXvzY3g8ybbPik+MV2palE5EnqQjpL6DDmKd/v3kOiBs/fyUKjC1oA3YnDhzqtyWUFDqR2wy80jdvEgZllpQbfVIv0gtaH7ivF74JGVY0jroYyS/5iNkQRGyoAhZUIQsKEIWFCELipAFRciCImRBEbKgCFlQhCwoQhYUIQuKkAVFyIIiZEERsqAIWVCEN8d0hY3+fDmXAAAAAElFTkSuQmCC";
	var image_remote = "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjRUMDA6NDM6MDMrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjRUMDA6NDM6MDMrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTI0VDAwOjQzOjAzKzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMGVjMDFmLWU2OGYtNGRkYy05ZWJlLWY4NGY3MWRlM2MwMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ1NTIyYWRlLWEyYTItNjc0Yi1hODVhLTBkYzAyNjk2YmQ1YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAzOGMwMGI0LWY4MmUtNGJlMS1hNDA1LTQzM2JmN2M4NTIxZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzOGMwMGI0LWY4MmUtNGJlMS1hNDA1LTQzM2JmN2M4NTIxZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MzowMyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMGVjMDFmLWU2OGYtNGRkYy05ZWJlLWY4NGY3MWRlM2MwMiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MzowMyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NmUxMzUxMS0wOWU5LTYwNDUtYmQxOC02Y2JhZTg2YjNkNGE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZvxFkAAACsUlEQVR4nO3aT4hNURzA8c8bkwlp0vgXWUwaydJG0cRKirK1sJuUUjY2Ym/PirGxY2lB2VgwWShWahbj30IUGZRSw3jP4pzHYMx56d57Hp1vnd7r3t/9ndO3d3/3nHNfq9PpKPyZwTqSjo+P78BJ7MJqdGKrklZsH3EfF6ampqYr7qMeQTiK/dhSYx9d5jGMdzhTdfKBqhNGTmFU/XLEPkZjn5VTl6DlNeVtvM+6BP03NHEL9MpTvI7fN2BrxrF8px8EvcU13MLzeGwUB3AEazONC/kFzeIsJn85Po2beIRzGGl4XN/JWYPmcNXvchYyGWPmGhnRIuQU9Abne4g7H2OzkFPQLJ70EPdEmARmIaegdo9xLdUvU3omp6ARbO4hbhPW1DyWP5JT0FpM9BA3IeOjPqegVTiB3Rha5PxQPHcixmYh91JjPa4LE8KNwm03Er8fiefWZxob8k8UYR2u4DFm4rFtGMs1oIX0g6AuY/pEykL6RVDHz7uOrQUtKzkFtWObF2bKr4TJI6EObRLqz6BQK7PUyxyCOviEO7iBe3iB97/ErRG2bPfgEPZipYZ/VU0L+ojLuCjs/3RvqcVmyu/xQVjRXxL2h47jmPAioBGa/NnO4DBOC+urtvTbju75drzmdMwxs8Q1ldKUoGfCa6C7+OLv1ladeO3dmOtZZaNbgqYEPcBtfK0g19eY62EFuZI0IWgeL+NnlTkb2QJpokgPYDsOqqa4tvE55qydpgTtw04sqyBft3APV5ArSVOP+RWx/XPkXs33PXUJyrHJXkufdd1ix2Pb4ceaqw4GhKXHtDA7r5xW+QPV0pQalKAISlAEJSiCEhRBCYqgBEVQgiIoQRGUoAhKUAQlKIISFEEJiqAERVCCIihBEZSgCEpQBCUoghIUQQmKoARFUIIiKME398p1yUg9avAAAAAASUVORK5CYII=";
	var image_mix_1 = "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjRUMDA6NDE6MTErMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjRUMDA6NDE6MTErMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTI0VDAwOjQxOjExKzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE1N2YzMDRjLWZiYjEtNDdmMi1iZTRhLTNmNmUyMDY5ZWFmOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVlODM1MWMzLWJhM2QtY2M0Yi1iYjRlLWNhM2RhODMxYzkwZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQxYTJjNTkyLWIzYjItNDg2MC05Y2VkLWJkZjFkNGI4M2EzNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQxYTJjNTkyLWIzYjItNDg2MC05Y2VkLWJkZjFkNGI4M2EzNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MToxMSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1N2YzMDRjLWZiYjEtNDdmMi1iZTRhLTNmNmUyMDY5ZWFmOCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MToxMSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NmUxMzUxMS0wOWU5LTYwNDUtYmQxOC02Y2JhZTg2YjNkNGE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7IRp2PAAADn0lEQVR4nO3aS4gcRRyA8d/MmsSsAd3oSbzEg0Y0IjEoJKzkICiIgkL0YDypoHhQL3rM1UNAEcSDguJFEUxABcUHihtfqAQUxIiYm29MolFMohkP1cP29s6kZneq5gH1QdN0TfW/ar/tenV1q9PpKPTnrJTB5ufnV3PbHO7HLuzH0/h1mHosLCwMc/sSkgpaIbO4Gw9jU5V2Fe7FXjyHP8ZSsxrtMZS5VhDzCZ60KKfLRXgCn+EerB9l5ZqMWtAuLOBZbInkvQTP4ADuwEzeqvVmVIJuwnt4Gdes8N6teAkf4ObE9YqSW9BOvF4dO4eMtR2v4k1cP2SsgcklaJvwX39XeHpScgPexiu4NnHsZaQWdDmex0dCv5HzCb2tKucFYfTLQuph/i1cmDjmmWjjLtwoSPohRwEpOTdxvEFZj3U5AqcWNK45yyxaOQKnbmJ7hcqOcoHXwt84miN4akGPJo43dsax1Jgqci5Wd+B8S5vbARypXa/DdULf1RGaywm8X527zFXxuv1MC79X8bKSS1BLWHBua6Rvx8e16/PwoiCyy1Fsxs+1tM14rRHroLAMyUrOJvZvj7RenXcz32rvy0JOQYOOZM18/e4bNF9SpqWTnrF8njM7ioLH+UZxJfwmvBGoSzo0ioKnRdAhY3gXxHQIuliYBvzXSG9Z+kR1Z9SHUxY+6YIewR7L69kV0+yoTwmz+adSVWBSO+nT1Xm30BmvbRxrqqOZfg7uTFmRSRXU5VSPtE9xK27Hl7krkLOJ9RqGmzsTLWxopG3Qvwn9JMj5sbr+Qtge2ljLk3R+lEtQBw8IS4k6Xzeujwh/cP1l10lhudHr/c63FuXA90KnvLFH3iTkfII+HCDPCbzT57degrbgUotzoKtx2cqrNjiTPoo1mcMbwo7sDB6SeUadWtBjOHvIGMerOMf7/L4Jjw9ZxsBM4hvFk8IT0hT0D/YJT9A3VdoVwr7bLcIwn5zUgo4ZfmfjmOUj0XfCsH6wkf65sA+3Q9jWTr7lNOnzoC77BDltoe+pH21hQNifo+DUT1BzTrPaGN0RbE113i3s7ff7wuO08NlM/Z4kpBb0oDCnWe1krY2/8Gd1fRhXCk1n0Obz1SrL7klqQckWiRX3CZ+9XGBxfdaPGfwi7NUno1U+4jwz09JJj40iKEIRFKEIilAERSiCIhRBEYqgCEVQhCIoQhEUoQiKUARFKIIiFEERiqAIRVCEIihCERShCIrwP7MnjZxN45KSAAAAAElFTkSuQmCC";
	var image_mix_2 = "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjRUMDA6NDE6NDkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjRUMDA6NDE6NDkrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTI0VDAwOjQxOjQ5KzAxOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjliYjgyOWJmLTlmODMtNDdjNy04MWQzLWRmYjMxZWFjZmFhZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNiOGM5M2JlLTkwYjUtYzA0Ny1iMzE3LWM2M2Y1MjNjYTc1YiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI5NzI4MzFkLTU1MTMtNDNmMC05NDFlLWIwYWFmZTcyMDAwNiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI5NzI4MzFkLTU1MTMtNDNmMC05NDFlLWIwYWFmZTcyMDAwNiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MTo0OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjliYjgyOWJmLTlmODMtNDdjNy04MWQzLWRmYjMxZWFjZmFhZSIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yNFQwMDo0MTo0OSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NmUxMzUxMS0wOWU5LTYwNDUtYmQxOC02Y2JhZTg2YjNkNGE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VT7gEAAAD00lEQVR4nO3aT2hcVRTH8c8kNsamEQ0uihYxihQaClbBP2hAK1hFUFTQVRFxI66q4kaqCIKlotaN4kLBXZUqiEoFwY0jWP9TWiVELI2iVlwINqVWa8fFfYOvaSb3zcx986K+Lzxmcu+59535zX3n3nMyjVarpaYzp6WcbHp6GkZxBy7BWSjrG2jhe7yPjxZ2NpvNJDdJKpAgyOu4PvG8S/E4HsFTZUw+lHi+hw1WHBjGNlxWxuSpBbo28XxFGcLVZU2ckonE83VD6s+C9DGo0eO4ORwS/LkYZ/YwRymbQSmqd8Ec7sYGXInLcSl2VOlUntQrqBsO4ibM5NpO4Fs8iFm8oPdVmYSqVlALDzlZnIW8KBwZKqUqgWbwdgG754VVVRlVCTSLPwvYzeFoyb4sSVUCDRe0a/ifxqAprCxgt66gXWlUJdAkNhewe6BsR2JUeQ560tKpyTaDz+tOocpz0ATewnPYiZ8yf6aElXNrZZ7lqFIgGMejwpnoVyF4ry4wbhZrDCA+VZ1qtFmJ88TF2Y97sBZXYHfJfi0bgWLsxb1Yj1ewUUhub8ZtwsFzpIwbV/mIHRPysa+y10PCh1wjrJC1mBcqhS9nYzZhK67J7HfgWbyDc8twsgqBPsYuvIev8VcHu7NxGMeFYthjuCHXvxrbcR+exktlODvIR+wz4ZG4Cs9gn87iEIL2eryBD5wsTp5JIWf7QiidJP3SByXQTuHMs1uxwtaIkM1/itsV83NKiE+f4MZenFyMQQi0V9h5jnQxZgx3KZ6z5dmA63oYtyiDiEFvCgG5Gw7jFmEltbP5UUGwP7JrGGdkfUeFx3VF1vZNXx7nGIRAB3sYcxxNQaB1Qk1oT/Y6gQuEHW42s5/M2r/DD315u4BBCLRZiA8rCtgOCQG5XUncJKQjMI0PsUU4fR/ARVnfq0I9exfuTOF0m0H8V2NjdhVlzD8CLVULanR4n5TUQfq3BHPkK4iL7Xjttnwp9sSCvmSkFmh/4vkqJ7VA2/Fjn3OcnnufDwHtLb+dc43l+tpZ/Wif9z6F1DFoRjgQbhECaLdLfghf5v7eg/uFR2hf1vaasFP9krPbivOFvC4pjZQ/oMp+H5SCYVwoCDafta3K2o/h96xvPOubF85BI8LK+rnZbOYF7JmqC2adGMe7wqro9hts4Ins6pvlKlAD5yh2dlqMsbhJMZarQEeE2LNKbyvo81SOJI1B/0X+LSXXyqgFilALFKEWKEItUIRaoAi1QBFqgSLUAkWoBYpQCxShFihCLVCEWqAItUARaoEi1AJFqAWKUAsUoRYowt97NaG3dUPjfAAAAABJRU5ErkJggg==";
	var image_connect = "iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKPWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAyLTIxVDIzOjMxOjI4WiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0xOFQxNDoxMzoxMCswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMThUMTQ6MTM6MTArMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJjNjkxZThiLWE1MGUtNGMzYi04NTkzLWY1MWE2ZGYwODRhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmExMTU2NGYwLWY5MTUtMjA0MS05MjgyLTA2Mzg4MTdiMjM5NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkxMjgzNzJjLWQzOTEtNGFmOC04YzU5LTNkMWM5ZDEyNGQ2NCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTI4MzcyYy1kMzkxLTRhZjgtOGM1OS0zZDFjOWQxMjRkNjQiIHN0RXZ0OndoZW49IjIwMjEtMDItMjFUMjM6MzE6MjhaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mzg2MGU4ZTUtNTE0Zi00YzRmLWEzZjUtODVhYzMxNjJkOWEzIiBzdEV2dDp3aGVuPSIyMDIxLTAyLTIxVDIzOjM2OjA0WiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmNDZmYjc0LTkwYzctNDk5Yi05YTBiLTRkNDM2ZjIxMGI4YSIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0yMVQyMzo0Mzo1OVoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzQzYjg2MS00ZTI5LTQ3OWEtYWQxNy01ZWRjNjkxNmJlYjkiIHN0RXZ0OndoZW49IjIwMjEtMDItMjFUMjM6NDM6NTlaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmM2OTFlOGItYTUwZS00YzNiLTg1OTMtZjUxYTZkZjA4NGFjIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE4VDE0OjEzOjEwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2Y0NmZiNzQtOTBjNy00OTliLTlhMGItNGQ0MzZmMjEwYjhhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMjgzNzJjLWQzOTEtNGFmOC04YzU5LTNkMWM5ZDEyNGQ2NCIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkxMjgzNzJjLWQzOTEtNGFmOC04YzU5LTNkMWM5ZDEyNGQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppxp348AAAPYSURBVHic7Zs5bFRHGMd/s+s9fGADMaeElBBS0aSBdAlHLGQOISoKSyCBBJZQBIEiAQQSSZSkCKIA0RAKRChAHKIxRZIuBaJAFIgjFk0KEEJctvfe902KYZU1sGbXXs83G/Errec3f//8zbyZefOMtZb31CamHSB02nw2VrqWbsZt+hP9+WvNuFE9tFoFfQmc9dlgKwnaAAwB7T4bbRVBm4ELQALw+lTxOgZNkgHgN63GQ6+gQeC0ZoCQK2gXcEI7RKgV9A1wTDsEhCnoEPAzbkBWJ6Qu1gZ8B+zXDlJNSIJ+AXZrh3idELpYEjhJgHIgjAo6BWzRDlELzQpKAecIWA7oVZABzgMbldqvGw1BKeAqsEah7Ybx28VsqQvsEC0iBzwLijo+vYwUV/lsc6p4FZSd/1VfaWYfxhaYwq6F18xeG7MmKZmFByj09GGkyCQlPWhyrAnxKsgggCG7cD+FWesxNmr0FiVgT9ODTYD/eZCNwEZkFuylMGsjRurubqO4wf3Pac33GnozaQuZBXuxJkH62UWsmTDKC6AfuO4lWxVqM2lDhJEs2XmD5HoHQAqAvO3S58BKFOSA+mLVYKyQmztIfu62V2PUuO72EPgcuKWRDoJYrApGMuR6t2BjSdof/+p+bOKPgBXAsGK4EAQ5jC2T/2ArkKTj8cnbRIV1wD/auYIRBBYjI+R6B/LFnpW/x8rPH9a6crbHVEEJsrH2nKQW3Ys6lq6G2GHgsHaqQAQJNtaZidIf/w0mMtGY4N6mxoEfgNz46/29fQ5gy1Wwsc6xqP2Tu5h4GbdXBDACbAJ+RPEfqSxIkPiMkSi95D4WsFKdxwBZYC1wFOjSSKgoSJB490tJLbkPxoI1NS4cwR17OQrM8JfPoSRIkHjPC0l/NOzE1JQDrpJywBfAcaDbS8RXKAgSpG3mU0ktHsbyLjnVjALLgCPTGO4NvA5+1kYxScx+JolFD0DiDf56pZKWT0O0mvgVlJhzR5IfRthSo3LG3aZpgerAaxcrdX22Alsaxr1Nnewf+v8VhC0/AXYA94BOr21PEo2n2FNgO3AT944s6JPsWvOgUdwJshsoTQDrRXMm/RLYCfyF56O9jaC9FisDXwN/EGglaQsCGMOdDRoiQEkhCKrwLXAJ6NAOUk1IgorAQdyxGO+L0lqEJKjCEeAM0JRPg6ZKiIIAfsKdsO/mvw00FQLZcn0DiztIHuFm3nmtIKFWUIUTOFGdKFVSqBVUQXBdTYB9QMF3gNArqMIZ4Hvc5wleKyn0CqoguMd/Ec+fKrSKoApX8Lz6N++/m5+YVhmD1PgXinD14cxr4V4AAAAASUVORK5CYII="

	var presets = [
		{
			category: 'webcast-control',
			label: 'Start Webcast',
			bank: {
				style: 'text',
				text: 'Start Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'start_webcast',
			}],
			feedbacks: [{
				type: 'encoding_status',
			}],
		},
		{
			category: 'webcast-control',
			label: 'Stop Webcast',
			bank: {
				style: 'text',
				text: 'Stop Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'stop_webcast',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Pause Webcast',
			bank: {
				style: 'text',
				text: 'Pause Webcast',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'pause_webcast',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Toggle Mode',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:webcast_type) Webcast`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'toggle_mode',
			}],
			feedbacks: [{
				type: 'webcast_mode',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Set Live Mode',
			bank: {
				style: 'text',
				text: `Live Mode`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_live_mode',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Set Test Mode',
			bank: {
				style: 'text',
				text: `Test Mode`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_test_mode',
			}],

		},
		{
			category: 'webcast-info',
			label: 'Duration',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:duration)`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}

		},
		{
			category: 'webcast-info',
			label: 'Caption',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:caption)`,
				size: '7',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}
		},
		{
			category: 'webcast-info',
			label: 'Agenda Item',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:agenda_item)`,
				size: '7',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			}
		},
		{
			category: 'webcast-info',
			label: 'Encoding Status',
			bank: {
				style: 'text',
				text: `$(${this.config.label}:encoding_status)`,
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),
			},
			feedbacks: [{
				type: 'encoding_status',
			}],
		},
		{
			category: 'webcast-control',
			label: 'Previous Agenda',
			bank: {
				style: 'text',
				text: 'Previous Agenda',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'previous_agenda',
			}],

		},
		{
			category: 'webcast-control',
			label: 'Next Agenda',
			bank: {
				style: 'text',
				text: 'Next Agenda',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'next_agenda',
			}],

		},
		{
			category: 'hybrid-controls',
			label: 'Local',
			bank: {
				style: 'png',
				png64: image_local,
				pngalignment: 'center:center',
				alignment: 'center:bottom',
				text: 'Local',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '0'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '0'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Remote',
			bank: {
				style: 'png',
				png64: image_remote,
				pngalignment: 'center:center',
				alignment: 'center:bottom',
				text: 'Remote',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '1'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '1'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Mix 1',
			bank: {
				style: 'png',
				png64: image_mix_1,
				pngalignment: 'center:center',
				alignment: 'center:bottom',
				text: 'Mix 1',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '2'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '2'
				}
			}],
		},
		{
			category: 'hybrid-controls',
			label: 'Mix 2',
			bank: {
				style: 'png',
				png64: image_mix_2,
				pngalignment: 'center:center',
				alignment: 'center:bottom',
				text: 'Mix 2',
				size: '14',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_hybrid_index',
				options: {
					hybrid_id: '3'
				}
			}],
			feedbacks: [{
				type: 'hybrid_index',
				options: {
					hybrid_id: '3'
				}
			}],
		},
		{
			category: 'mic-automation',
			label: 'Mic Automation On',
			bank: {
				style: 'text',
				text: ' Auto On',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_automation_status',
				options: {
					state: '1'
				}
			}],
			feedbacks: [{
				type: 'automation_status',
				options: {
					state: '1'
				}
			}],
		},
		{
			category: 'mic-automation',
			label: 'Mic Automation Off',
			bank: {
				style: 'text',
				text: ' Auto Off',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_automation_status',
				options: {
					state: '0'
				}
			}],
			feedbacks: [{
				type: 'automation_status',
				options: {
					state: '0'
				}
			}],
		},
		{
			category: 'jit-slides',
			label: 'JIT Slides On',
			bank: {
				style: 'text',
				text: ' JIT On',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_jit_slide',
				options: {
					state: '1'
				}
			}],
			feedbacks: [{
				type: 'jit_slides',
				options: {
					state: '1'
				}
			}],
		},
		{
			category: 'jit-slides',
			label: 'JIT Slides Off',
			bank: {
				style: 'text',
				text: ' JIT Off',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_jit_slide',
				options: {
					state: '0'
				}
			}],
			feedbacks: [{
				type: 'jit_slides',
				options: {
					state: '0'
				}
			}],
		},
		{
			category: 'select-seat',
			label: 'Seat 1',
			bank: {
				style: 'text',
				text: ' Seat 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_selected_seat',
				options: {
					seat: '1'
				}
			}],
			feedbacks: [{
				type: 'selected_seat',
				options: {
					seat: '1'
				}
			}],
		},
		{
			category: 'select-seat',
			label: 'Seat 2',
			bank: {
				style: 'text',
				text: ' Seat 2',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_selected_seat',
				options: {
					seat: '2'
				}
			}],
			feedbacks: [{
				type: 'selected_seat',
				options: {
					seat: '2'
				}
			}],
		},
		{
			category: 'select-seat',
			label: 'Seat 3',
			bank: {
				style: 'text',
				text: ' Seat 3',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_selected_seat',
				options: {
					seat: '3'
				}
			}],
			feedbacks: [{
				type: 'selected_seat',
				options: {
					seat: '3'
				}
			}],
		},
		{
			category: 'select-seat',
			label: 'Seat 4',
			bank: {
				style: 'text',
				text: ' Seat 4',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'set_selected_seat',
				options: {
					seat: '4'
				}
			}],
			feedbacks: [{
				type: 'selected_seat',
				options: {
					seat: '4'
				}
			}],
		},
		{
			category: 'logo',
			label: 'Logo',
			bank: {
				style: 'png',
				png64: image_connect,
				pngalignment: 'center:center',
				text: '',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
		},

	]

	return presets;
}