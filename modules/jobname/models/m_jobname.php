<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Vikosha Perdana
|---------------------------------
*/
class M_jobname extends CI_Model{
	private $connectionName;
	public function __construct(){
		parent::__construct();
	}
	public function setConnection($connectionName){
		$this->connectionName = $connectionName;
	}
	public function getConnection(){
		return $this->load->database($this->connectionName, TRUE);
	}

	public function getGridJobName($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_jobname AS id,
			u.jobname AS jobname,
            u.id_joblevel AS id_joblevel,
            v.name_joblevel AS name_joblevel", FALSE);
        $db->from('tm_jobname u');
        $db->join('tm_joblevel v', 'u.id_joblevel=v.id_joblevel');
        $db->order_by('u.jobname');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridJobName(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_jobname AS id,
            u.jobname AS jobname,
            u.id_joblevel AS id_joblevel,
            v.name_joblevel AS name_joblevel", FALSE);
        $db->from('tm_jobname u');
        $db->join('tm_joblevel v', 'u.id_joblevel=v.id_joblevel');
        $db->order_by('u.jobname');
        $query = $db->get();
        return $query;
	}

	public function getUUID(){   
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->query('SELECT get_uuid() AS uuid;')->row()->uuid;
    }

    public function cekRelasi($id){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_karyawan')->where('id_jobname',$id)->get()->row()->id;
    }

    public function cekData($jobname){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS id', FALSE)->from('tm_jobname')->where('jobname',$jobname)->get()->row()->id;
    }

    public function saveJobName($uuid, $id_joblevel, $jobname){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('id_jobname', $uuid);
        $db->set('id_joblevel', $id_joblevel);
        $db->set('jobname', $jobname);
        $db->insert('tm_jobname');
    }

    public function updateJobName($id, $id_joblevel, $jobname){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        
        $data = array(
            'id_joblevel'   => $id_joblevel,
            'jobname'       => $jobname
        );
        $db->where('id_jobname', $id);
        $db->update('tm_jobname', $data);

    }

    public function deleteJobName($id){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('id_jobname',$id);
        $db->delete('tm_jobname');
    }

    public function searchJobName($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            u.id_jobname AS id,
            u.jobname AS jobname,
            u.id_joblevel AS id_joblevel,
            v.name_joblevel AS name_joblevel", FALSE);
        $db->from('tm_jobname u');
        $db->join('tm_joblevel v', 'u.id_joblevel=v.id_joblevel');
        $db->order_by('u.jobname');
        $db->like('LOWER(u.jobname)', strtolower($name));
        $db->or_like('LOWER(v.name_joblevel)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}