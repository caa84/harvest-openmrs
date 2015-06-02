#!/bin/bash
#non-zero exit code aborts update
#enforce fast-forward only -- makes sure object name is a commit object that is a descendant of the commit object named by the old object name.

branch=$1
old_commit=$2
new_commit=$3

echo "Moving from $old_commit to $new_commit on $branch branch"

#pull_request -- event --> fires anytime PR is assigned, unassigned, labeled, unlabeled, opened, closed, reopened, or updated due to a new push in the branc that the PR is tracking


#List pull requests
GET /repos/:owner/:repo/pulls

#Get a single pull request
GET /repos/:owner/:repo/pulls/:number

#Update a pull request
PATCH /repos/:owner/:repo/pulls/:number


