$(document).ready(function() {
    $.get('data/subject-modules.csv', function(data) {
        var parsedData = $.csv.toArrays(data);
        var headers = parsedData.shift();

        $('#table-modules').DataTable({
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, "All"]],
            'order': [[ 3, 'desc' ]],
            'aoColumns': [ 
              { sTitle: headers[0] }, // name
              { sTitle: headers[1] }, // uri
              { sTitle: headers[2] }, // total commits
              { sTitle: headers[3] }, // bug fixing commits
              { sTitle: headers[4], bVisible: false }, // number authors
              { sTitle: headers[5], bVisible: false }, // number files
              { sTitle: headers[6] }, // lines of code
              { sTitle: headers[7] }, // stargazers
              { sTitle: headers[8] }  // downloads
            ],
            'data': parsedData,
            "paging": true
        });
    });

    $.get('data/subject-apps.csv', function(data) {
        var parsedData = $.csv.toArrays(data);
        var headers = parsedData.shift();

        $('#table-apps').DataTable({
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, "All"]],
            'order': [[ 3, 'desc' ]],
            'aoColumns': [ 
              { sTitle: headers[0] }, // name
              { sTitle: headers[1] }, // uri
              { sTitle: headers[2] }, // total commits
              { sTitle: headers[3] }, // bug fixing commits
              { sTitle: headers[4], bVisible: false }, // number authors
              { sTitle: headers[5], bVisible: false }, // number files
              { sTitle: headers[6] }, // lines of code
              { sTitle: headers[7] } // stargazers
            ],
            'data': parsedData,
            "paging": true
        });
    });

    $.get('data/basic-change-types.csv', function(data) {
        var parsedData = $.csv.toArrays(data);
        var headers = parsedData.shift();

        $('#table-bct').DataTable({
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, "All"]],
            'order': [[ 5, 'desc' ]],
            'aoColumns': [ 
              { sTitle: headers[0] }, // id
              { sTitle: headers[1] }, // type
              { sTitle: headers[2] }, // context
              { sTitle: headers[3] }, // modification
              { sTitle: headers[4] }, // name
              { sTitle: headers[5] } // number
            ],
            'data': parsedData,
            "paging": true
        });
    });

    $.get('data/complex-change-types.csv', function(data) {
        var parsedData = $.csv.toArrays(data);
        var headers = parsedData.shift();

        var table = $('#table-cct').DataTable({
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, "All"]],
            'order': [[ 0, 'asc' ]],
            'aoColumns': [ 
              { sTitle: headers[0] }, // id
              { sTitle: headers[1] }, // signature
              { sTitle: headers[2] }, // # commits on cluster
              { sTitle: headers[3] }, // avg # modified statements
              { sTitle: headers[4] }, // # basic change types
              { sTitle: headers[5] } // # projects
            ],
            'data': parsedData,
            "paging": true
        });

        // Click handler for cell rows
        $('#table-cct tbody').on('click', 'tr', function() {
            // Get data from the row
            var data = table.row(this).data();
            var clusterId = data[0] - 1;

            // Add cluster signature to modal
            $('#cct-modal-details').html(data[1]);

            // Load data for table in modal
            $.get('data/clusters/' + clusterId + '.csv', function(data) {
                var parsedData = $.csv.toArrays(data);

                // Format URL
                parsedData.forEach(function(row) {
                    row[3] = "<a href='" + row[3] + "' target='_blank'>GitHub Commit</a>";
                })

                var table = $('#table-cct-details').DataTable({
                    'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    'order': [[ 2, 'asc' ]],
                    'aoColumns': [ 
                      { sTitle: 'Id', bVisible: false },
                      { sTitle: 'Type', bVisible: false },
                      { sTitle: 'Project Name' },
                      { sTitle: 'GitHub URL' }, 
                      { sTitle: 'BuggyCommitID', bVisible: false }, 
                      { sTitle: 'RepairedCommitId', bVisible: false },
                      { sTitle: 'Class', bVisible: false },
                      { sTitle: 'Method', bVisible: false }
                    ],
                    'data': parsedData,
                    "paging": true
                });

                // Open modal
                $('#cct-modal').modal();

                // Register callback to reset table when model is closed
                $('#cct-modal').on('hidden.bs.modal', function (e) {
                    table.destroy();  
                });
            });
        });
    });

    $.get('data/bug-patterns.csv', function(data) {
        var parsedData = $.csv.toArrays(data);
        var headers = parsedData.shift();

        var table = $('#table-bug-patterns').DataTable({
            'lengthMenu': [[-1], ["All"]],
            'aoColumns': [ 
              { sTitle: headers[0] }, // id
              { sTitle: headers[1] }, // fault
              { sTitle: headers[2] }, // repair
              { sTitle: headers[3] } // clusters
            ],
            'data': parsedData,
            "paging": true
        });

        // Click handler for cell rows
        $('#table-bug-patterns tbody').on('click', 'tr', function() {
            // Update filter message
            var bugPatternId = table.row(this).data()[0];
            var bugPatternFault = table.row(this).data()[1];
            var bugPatternRepair = table.row(this).data()[2];
            updateFilterMessage(bugPatternId + ": " + bugPatternFault + " - " + bugPatternRepair);

            $('html, body').animate({
                scrollTop: $("#cct").offset().top - 80
            }, 1000);

            // Get the previous table
            var cctTable = $('#table-cct').DataTable();

            // Create regular expression with ids
            var clusterIds = table.row(this).data()[3].replace(/, /g, "|");

            // Perform search
            cctTable.column(0).search('^(' + clusterIds + ')$', true, false).draw();
        });
    });

    var updateFilterMessage = function(id) {
        $('#filter-message').fadeIn();
        $('#filter-message #bug-pattern-id').text(id);
    }

    var removeFilter = function() {
        // Hide message
        $('#filter-message #bug-pattern-id').text('');
        $('#filter-message').fadeOut();

        // Remove filter from table
        var cctTable = $('#table-cct').DataTable();
        cctTable.column(0).search('').draw();
    }

    $('#remove-filter-button').click(removeFilter);
});